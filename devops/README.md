# DevOps Course

## The goal

The course aims to offer in-depth knowledge of DevOps principles and essential AWS services necessary for efficient automation and infrastructure management. Participants will gain practical skills in setting up, deploying, and managing Kubernetes clusters on AWS, using tools like Kops and Terraform.

## Prerequisite

- The application code should have unit tests and should be able to run (`npm test` or similar).
- Students should have a SonarQube account and will be able to run with their code (`sonar-scanner -Dsonar.projectKey=Your_Project_Key -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io/`).
- Dockerfile with application.

## Module 1: Configuration and Resources

### Part 1 (configuration)

- Developing the architecture of the infrastructure with private and public networks.
- Install aws cli.
- Installation and configuration of Terraform.
- Configuring access to AWS via Terraform (API keys, IAM roles).

### Part 2 (resources)

#### Option 1 (paid version)

- Writing Terraform code for creating VPC with distinct public and private subnets, and route tables.
- NAT gateway in the public network.
- Creating security groups and rules that correspond to the network architecture and resource distribution across public and private networks.
- Describing IAM roles and policies for Kubernetes.
- Configuring EC2 instances for Kubernetes nodes.
- Setting up EBS volumes and attaching them to instances.
- Implementing a bastion host within the public subnet.
- Create an S3 bucket in AWS to store the Kops state.
- Setting up a DNS record for the Kubernetes cluster (if used).

#### Option 2 (free resources)

- Writing Terraform code for creating VPC with distinct public and private subnets, and route tables.
- NAT instance in the public network.
- Creating security groups and rules.
- Describing IAM roles and policies for Kubernetes.
- Configuring EC2 instances for Kubernetes nodes.
- Setting up EBS volumes and attaching them to instances.
- Implementing a bastion host within the public subnet.
- Create an S3 bucket in AWS to store the Kops state.

## Module 2: Cluster Configuration and Creation

### Part 1 (cluster configuration)

#### Option 1 (kops config)

- Installing Kops on your workstation.
- Creating an IAM user for Kops with the necessary permissions.
- Configuring access to AWS using IAM credentials.

#### Option 2 (k3s config)

- Installing K3s on your local machine.
- Creating an IAM user with the necessary permissions specifically for managing the K3s environment.
- Configuring AWS IAM credentials on the workstation.

### Part 2 (create cluster)

#### Option 1 (kops installation)

- Prepare cluster configuration with kops command.
- Apply kops configuration.
- Validate the cluster.
- Create an account in Kubernetes for Jenkins.

#### Option 2 (k3s installation)

- Prepare the K3s cluster configuration.
- Applying the K3s configuration using Terraform and K3s setup commands.
- Validating the cluster to ensure it's correctly configured and operational.
- Check k3s service status.
- Get nodes status.
- Inspect cluster resources.

## Module 3: Jenkins Server Installation and Configuration

### Part 1 (Installation and configuration Jenkins server)

- Installation and configuration of Helm, a package manager for Kubernetes.
- Configuring and applying the Helm chart to deploy Jenkins in the cluster.
- Setting up traffic routing to Jenkins through Ingress or a LoadBalancer.
- Accessing the Jenkins interface through a browser.
- Installing necessary plugins in Jenkins. (sonarqube, docker).
- Set up necessary plugins in Jenkins for Kubernetes like Kubernetes plugin. Configure the plugin with endpoints and credentials for Kubernetes.

### Part 2 (Create Pipeline)

- Create pipeline, add steps:
  1. Build application.
  2. Unit tests.
  3. SonarQube check.
  4. Build and push docker image to ECR.
  5. Deploy docker image to Kubernetes cluster.
- Create a Helm chart for your application. The chart should contain templates for all necessary Kubernetes resources like Deployments as well as Health checks, liveness, readiness probes.
- Store your Helm chart in a source control system accessible from Jenkins.
- In the deployment stage of your Jenkinsfile, add steps to deploy the application using Helm.
- Check that the application works as expected.
- After the deployment, you can add steps to verify that the application is running as expected. This could involve checking the status of the Kubernetes deployment, running integration tests, or hitting a health check endpoint.

## Module 4: Monitoring with Prometheus and Grafana

### Part 1 (Installation and configuration Prometheus)

- Using Helm to install Prometheus in Kubernetes.
- Configuring Prometheus to collect metrics from the cluster.
- Creating and configuring Service Monitor to track services in the cluster.
- Configuring alert rules in Prometheus for monitoring critical events.

### Part 2 (Installation and configuration Grafana)

- Deploying Grafana in Kubernetes using Helm.
- Setting up secure access to Grafana via Ingress or LoadBalancer.
- Configuring Grafana to connect to Prometheus as a data source.
- Importing or creating dashboards to visualize metrics from Prometheus.

### Part 3. (Testing monitoring)

- Conducting tests to verify the collection of metrics and their display in Grafana.
- Simulating failures or high loads to test configured alerts.

## Useful links

- [Kubernetes with Kops](https://blog.kubecost.com/blog/kubernetes-kops/)
- [K3s AWS Terraform Cluster](https://garutilorenzo.github.io/k3s-aws-terraform-cluster/)
