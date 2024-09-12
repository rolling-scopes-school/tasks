# Task: K8s Cluster Configuration and Creation

## Objective

In this task, you will configure and deploy a Kubernetes (K8s) cluster on AWS using either kOps or k3s. You will also verify the cluster by running a simple workload.

## Steps

1. **Choose Deployment Method**
   - Get familiar with both [kOps](https://kops.sigs.k8s.io/) and [k3s](https://k3s.io/).
   - Decide which deployment method is more suitable for you based on the following considerations:
     - kOps handles the creation of most resources for you, while k3s requires you to manage the underlying infrastructure.
     - kOps may lead to additional expenses due to the creation of more AWS resources.
     - kOps requires a domain name or sub-domain.
     - Use AWS EC2 instances from the Free Tier to avoid additional expenses.

2. **Create or Extend Terraform Code**
   - Create or extend Terraform code to manage AWS resources required for the cluster creation.
   - Ensure the code includes the creation of a bastion host.

3. **Deploy the Cluster**
   - Deploy the K8s cluster using the chosen method (kOps or k3s).
   - Ensure the cluster is accessible from your local computer.

4. **Verify the Cluster**
   - Run the `kubectl get nodes` command from your local computer to get information about the cluster.
   - Provide a screenshot of the `kubectl get nodes` command output.

5. **Deploy a Simple Workload**
   - Deploy a simple workload on the cluster using the following command:
     ```sh
     kubectl apply -f https://k8s.io/examples/pods/simple-pod.yaml
     ```
   - Ensure the workload runs successfully on the cluster.

6. **Additional Tasks**
   - Implement monitoring for the cluster using Prometheus and Grafana.
   - Document the cluster setup and deployment process in a README file.

## Submission

- Provide a PR with the Terraform code for the K8s cluster and bastion host.
- Provide a screenshot of the `kubectl get nodes` command output.
- Ensure that the simple workload is deployed and running successfully on the cluster.
- Provide a PR with the monitoring setup.
- Provide a README file documenting the cluster setup and deployment process.

## Evaluation Criteria (100 points for covering all criteria)

1. **Terraform Code for AWS Resources (10 points)**
   - Terraform code is created or extended to manage AWS resources required for the cluster creation.
   - The code includes the creation of a bastion host.

2. **Cluster Deployment (60 points)**
   - A K8s cluster is deployed using either kOps or k3s.
   - The deployment method is chosen based on the user's preference and understanding of the trade-offs.

3. **Cluster Verification (10 points)**
   - The cluster is verified by running the `kubectl get nodes` command from the local computer.
   - A screenshot of the `kubectl get nodes` command output is provided.

4. **Workload Deployment (10 points)**
   - A simple workload is deployed on the cluster using `kubectl apply -f https://k8s.io/examples/pods/simple-pod.yaml`.
   - The workload runs successfully on the cluster.

5. **Additional Tasks (10 points)**
   - Document the cluster setup and deployment process in a README file.