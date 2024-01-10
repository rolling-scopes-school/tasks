# Module 2: Cluster Configuration and Creation

## Preface

In this module you need to configure a K8s cluster on top of the network infrastructure, created in the previous module.

## K8s deployment and configuration

There are multiple ways of deployment K8s cluster on AWS. In this course you're supposed to use either kOps (https://kops.sigs.k8s.io/) or k3s (https://k3s.io/). You need to get familiar with both project and decide which one is more suitable for you.

Several things to keep in mind during cluster deployment:

1. kOps will handle creation of most resources for you, with k3s you are in charge of underlying infrastructure management;
2. By default, kOps creates more AWS resources. This may lead to additional expenses and not fit into AWS Free Tier;
3. You'll need a domain name or a sub-domain for kOps-managed cluster;
4. Make sure you're using AWS EC2 instances type from Free Tier to avoid addition expenses (see https://aws.amazon.com/free for more details).

Rule of thumb: use k3s if you don't want to spend on AWS resources; use kOps if you'd like to practise with more a more real-life cluster.

**This task is considered as done if all the conditions below are met:**

- you have Terraform code which manages AWS resources, required for cluster creation (may vary depending on selected deployment method). You may either extend code from the previous module or create a new one;
- you are able to get information about the cluster from your local computer using `kubectl get nodes` command;
- you are able to run simple workload on your cluster (you may use `kubectl apply -f https://k8s.io/examples/pods/simple-pod.yaml` for this purpose).

### Note on AWS Free Tier resources usage

AWS provides you with 750 hours per month of Linux t2.micro or t3.micro instance. That means that you may run:

- a single EC2 instance for the whole month OR
- two EC2 instances for the half a month each OR
- three EC2 instances for 250 hours per month each, etc.

The same principle is applicable to EBS storage, which will be attached to each EC2 instance (you have 30 Gb of gp2/gp3 within AWS Free Tier).
