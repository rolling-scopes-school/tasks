# Task 1: AWS Account Configuration

## Objective

In this task, you will install and configure the required software on your local computer and set up an AWS account with the necessary permissions and security configurations.

## Steps

1. **Install AWS CLI and Terraform**

   - Follow the instructions to install [AWS CLI 2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
   - Follow the instructions to install [Terraform 1.4+](https://developer.hashicorp.com/terraform/install?product_intent=terraform).

2. **Create IAM User and Configure MFA**

   - In your AWS account, navigate to IAM and create a new user with the following policies attached:
     - AmazonEC2FullAccess
     - AmazonRoute53FullAccess
     - AmazonS3FullAccess
     - IAMFullAccess
     - AmazonVPCFullAccess
     - AmazonSQSFullAccess
     - AmazonEventBridgeFullAccess
   - Configure MFA for both the new user and the root user.
   - Generate a new pair of Access Key ID and Secret Access Key for the user.

3. **Configure AWS CLI**
   - Configure AWS CLI to use the new user's credentials.
   - Verify the configuration by running the command: `aws ec2 describe-instance-types --instance-types t4g.nano`.

## Submission

- Provide a screenshot of the non-root account secured by MFA (ensure sensitive information is not shared).
- Ensure that the AWS CLI and Terraform installations are verified using `aws --version` and `terraform version`.
