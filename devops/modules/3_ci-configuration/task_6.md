# Task 6: Application Deployment via Jenkins Pipeline

## Objective

In this task, you will configure a Jenkins pipeline to deploy your application on a Kubernetes (K8s) cluster. The pipeline will cover the software lifecycle phases of build, testing, and deployment.

## Steps

1. **Create Docker Image and Store in ECR**
   - Create a Docker image for your application.
   - Store the Docker image in an AWS ECR repository.
   - Ensure your K8s nodes can access the ECR repository by adjusting or creating a new instance profile for your EC2 instances.

2. **Create Helm Chart**
   - Create a Helm chart for your application.
   - Test the Helm chart manually from your local machine.

3. **Store Artifacts in Git**
   - Store the Dockerfile and Helm chart in a git repository accessible to Jenkins.

4. **Configure Jenkins Pipeline**
   - Create a Jenkins pipeline and store it as a Jenkinsfile in your main git repository.
   - Configure the pipeline to be triggered on each push event to the repository.

5. **Pipeline Steps**
   - The pipeline should include the following steps:
     1. Application build
     2. Unit test execution
     3. Security check with SonarQube
     4. Docker image building and pushing to ECR (manual trigger)
     5. Deployment to K8s cluster with Helm (dependent on the previous step)
     6. (Optional) Application verification (e.g., curl main page, send requests to API, smoke test)

6. **Additional Tasks**
   - Set up a notification system to alert on pipeline failures or successes.
   - Document the pipeline setup and deployment process in a README file.

## Submission

- Provide a PR with the application, Helm chart, and Jenkinsfile in a repository.
- Ensure that the pipeline runs successfully and deploys the application to the K8s cluster.
- Provide a README file documenting the pipeline setup and deployment process.

## Evaluation Criteria (100 points for covering all criteria)

1. **Pipeline Configuration (40 points)**
   - A Jenkins pipeline is configured and stored as a Jenkinsfile in the main git repository.
   - The pipeline includes the following steps:
     - Application build
     - Unit test execution
     - Security check with SonarQube
     - Docker image building and pushing to ECR (manual trigger)
     - Deployment to K8s cluster with Helm (dependent on the previous step)

2. **Artifact Storage (20 points)**
   - Built artifacts (Dockerfile, Helm chart) are stored in git and ECR (Docker image).

3. **Repository Submission (5 points)**
   - A repository is created with the application, Helm chart, and Jenkinsfile.

4. **Verification (5 points)**
   - The pipeline runs successfully and deploys the application to the K8s cluster.

5. **Additional Tasks (30 points)**
   - **Application Verification (10 points)**
     - Application verification is performed (e.g., curl main page, send requests to API, smoke test).
   - **Notification System (10 points)**
     - A notification system is set up to alert on pipeline failures or successes.
   - **Documentation (10 points)**
     - The pipeline setup and deployment process, are documented in a README file.