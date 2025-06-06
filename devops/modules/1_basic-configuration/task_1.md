# Task 1: AWS Account Configuration

![task_1 schema](../../visual_assets/task_1.png)

## Objective

In this task, you will:

- Install and configure the required software on your local computer
- Set up an AWS account with the necessary permissions and security configurations
- Deploy S3 buckets for Terraform states
- Create a Github Actions workflow to deploy infrastructure in AWS

Additional tasks:

- Create a federation with your AWS account for Github Actions
- Create an IAM role for Github Actions

## Steps

1. **Install AWS CLI and Terraform**

   - Follow the instructions to install [AWS CLI 2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
   - Follow the instructions to install [Terraform 1.6+](https://developer.hashicorp.com/terraform/install?product_intent=terraform).
   - **optional** Configuring Terraform version manager [tfenv](https://github.com/tfutils/tfenv)

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

4. **Create a Github repository for your Terraform code**

   - Using your personal account create a repository `rsschool-devops-course-tasks`

5. **Create a bucket for Terraform states**

   - Locking terraform state via DynamoDB is not required in this task, but recommended by the best practices. vvvv
   - [Managing Terraform states Best Practices](https://spacelift.io/blog/terraform-s3-backend)
   - [Terraform backend S3](https://developer.hashicorp.com/terraform/language/backend/s3)

6. **Create an IAM role for Github Actions(Additional task)💫**

   - Create an IAM role `GithubActionsRole` with the same permissions as in step 2:
     - AmazonEC2FullAccess
     - AmazonRoute53FullAccess
     - AmazonS3FullAccess
     - IAMFullAccess
     - AmazonVPCFullAccess
     - AmazonSQSFullAccess
     - AmazonEventBridgeFullAccess
   - [Terraform resource](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role)

7. **Configure an Identity Provider and Trust policies for Github Actions(Additional task)💫**

   - Update the `GithubActionsRole` IAM role with a Trust policy following the next guides
   - [IAM roles terms and concepts](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html#id_roles_terms-and-concepts)
   - [Github tutorial](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
   - [AWS documentation on OIDC providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html#idp_oidc_Create_GitHub)
   - `GitHubOrg` is a Github `username` in this case

8. **Create a Github Actions workflow for deployment via Terraform**
   - The workflow should have 3 jobs that run on pull request and push to the default branch:
     - `terraform-check` with format checking using [terraform fmt](https://developer.hashicorp.com/terraform/cli/commands/fmt)
     - `terraform-plan` for planning deployments [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
     - `terraform-apply` for deploying [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply)
   - [terraform init](https://developer.hashicorp.com/terraform/cli/commands/init)
   - [Github actions reference](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
   - [Setup terraform](https://github.com/hashicorp/setup-terraform)
   - [Configure AWS Credentials](https://github.com/aws-actions/configure-aws-credentials)

## Submission

- Create a branch `task_1` from `main` branch in your repository.
- [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) (PR) from `task_1` branch to `main`.
- Provide the code for Terraform and GitHub Actions in the PR.
- Provide screenshots of `aws --version` and `terraform version` in the PR description.
- Provide a link to the Github Actions workflow run in the PR description.
- Provide the Terraform plan output with S3 bucket (and possibly additional resources) creation in the PR description.

## Evaluation Criteria (100 points for covering all criteria)

1. **MFA User configured (10 points)**

   - Screenshot of the non-root account secured by MFA (ensure sensitive information is not shared) is presented

2. **Bucket and GithubActionsRole IAM role configured (20 points)**

   - Terraform code is created and includes:
     - Provider initialization
     - Creation of S3 Bucket

3. **Github Actions workflow is created (30 points)**

   - Workflow includes all jobs

4. **Code Organization (10 points)**

   - Variables are defined in a separate variables file.
   - Resources are separated into different files for better organization.

5. **Verification (10 points)**

   - Terraform plan is executed successfully

6. **Additional Tasks (20 points)💫**
   - **Documentation (5 points)**
   - Document the infrastructure setup and usage in a README file.
   - **Submission (5 points)**
   - A GitHub Actions (GHA) pipeline is passing
   - **Secure authorization (10 points)**
   - IAM role with correct Identity-based and Trust policies used to connect GitHubActions to AWS.
