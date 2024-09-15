# Task 2: Basic Infrastructure Configuration

## Objective

In this task, you will write Terraform code to configure the basic networking infrastructure required for a Kubernetes (K8s) cluster.

## Steps

1. **Write Terraform Code**
   - Create Terraform code to configure the following:
     - VPC
     - 1 public subnet in one of the AZ for Bastion host and NAT
     - 2 private subnets in different AZs
     - Internet Gateway
     - NAT Gateway for instances in private subnets
     - Proper routing configuration

2. **Organize Code**
   - Define variables in a separate variables file.
   - Separate resources into different files for better organization.

3. **Verify Configuration**
   - Execute `terraform plan` to ensure the configuration is correct.
   - Provide a resource map screenshot (VPC -> Your VPCs -> your_VPC_name -> Resource map).

4. **Submit Code**
   - Create a PR with the Terraform code in a new repository.
   - (Optional) Set up a GitHub Actions (GHA) pipeline for the Terraform code.

5. **Additional Tasks**
   - Implement security groups and network ACLs.
   - Create a bastion host for secure access to the private subnets.
   - Document the infrastructure setup and usage in a README file.

## Evaluation Criteria (100 points for covering all criteria)

1. **Terraform Code Implementation (60 points)**
   - Terraform code is created to configure the following:
     - VPC
     - 2 private subnets in different AZs
     - Internet Gateway
     - Proper routing configuration

2. **Code Organization (10 points)**
   - Variables are defined in a separate variables file.
   - Resources are separated into different files for better organization.

3. **Verification (10 points)**
   - Terraform plan is executed successfully.
   - A resource map screenshot is provided (VPC -> Your VPCs -> your_VPC_name -> Resource map).

4. **Additional Tasks (20 points)**
   - **Security Groups and Network ACLs (5 points)**
     - Implement security groups and network ACLs for the VPC and subnets.
   - **Bastion Host (5 points)**
     - Create a bastion host for secure access to the private subnets.
   - **Documentation (5 points)**
     - Document the infrastructure setup and usage in a README file.
   - **Submission (5 points)**
   - A GitHub Actions (GHA) pipeline is set up for the Terraform code.