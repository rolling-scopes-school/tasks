# Module 1: Configuration and Resources

## Preface

In this module you will install and configure required software, select proper network configuration and implement it using Terraform.

## Task 1. Software installation and configuration

You need to install and configure the software following on your local computer:

- AWS CLI 2(https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Terraform 1.4+ (https://developer.hashicorp.com/terraform/install?product_intent=terraform)

In your AWS account, navigate to IAM and create a new user, with the policies following attached:

- AmazonEC2FullAccess
- AmazonRoute53FullAccess
- AmazonS3FullAccess
- IAMFullAccess
- AmazonVPCFullAccess
- AmazonSQSFullAccess
- AmazonEventBridgeFullAccess

Configure MFA for both the new user and root user.

Generate a new pair of Access Key ID and Secret Access Key for the user, and configure AWS CLI to use this pair of credentials.

**This task is considered as done if all the conditions below are met:**

- you have AWS CLI and Terraform installed (`aws --version` and `terraform version` show actual versions);
- you have dedicated user configured with the permissions above;
- you can run command `aws ec2 describe-instance-types --instance-types t4g.nano` with the user's credentials.

## Task 2. Basic infrastructure configuration

In this task you need to write Terraform code, which will handle networking infrastructure configuration. The infrastructure will be used for housing K8s cluster components, which will be implemented in the subsequent tasks.

There are two possible ways to implement networking for a K8s cluster. You need to pick the one, which is more appropriate to you, and implement it using Terraform.

### Networking with public subnets only

In that option your VPC should contain two private subnets, located in different AZs within the selected AWS Region. The VPC should have in Internet Gateway attached, and have proper routing configuration.

This option doesn't introduce an additional cost.

### Network with private and public subnets (recommended way)

Your VPC should contain two private and two public subnets, spread across multiple AZs within the selected AWS Region. The VPC should have an Internet Gateway and a NAT Gateway attached, and have proper routing configuration. For the sake of price reducing, you should deploy only one instance of NAT Gateway, located in the AZ of your choice.

**Note:** a NAT Gateway introduces an additional cost. Don't forget to tear down this infrastructure when you not using it. If you're planning to use only AWS Free Tier, please consider another networking option.

**This task is considered as done if all the conditions below are met:**

- you have a Terraform code, which implements one of the infrastructure above. Terraform should use AWS profile, configured in the task 1 of this module;
- you are able to reach hosts in the internet from both public and private (if any) subnets (this could be verified by launching an ad-hoc EC2 instance and pinging 8.8.8.8 from it).
