# Task 6: Application Deployment via Jenkins Pipeline
![task_6 schema](../../visual_assets/task_4-6.png)

## Objective

In this task, you will configure a Jenkins pipeline to deploy your application on a Kubernetes (K8s) cluster. The pipeline will cover the software lifecycle phases of build, testing, and deployment.

## Steps


1. **Configure Jenkins Pipeline**

   - Create a Jenkins pipeline and store it as a Jenkinsfile in your git repository.
   - Configure the pipeline to be triggered on each push event to the repository.

2. **Pipeline Steps**

   - The pipeline should include the following steps:
     1. Application build
     2. Unit test execution
     3. Security check with SonarQube
     4. Docker image building and pushing to any Registry
     5. Deployment to the K8s cluster with Helm (dependent on the previous step)
     6. (Optional) Application verification (e.g., curl the main page, send requests to API, smoke test)

3. **Application verification**
   - Ensure that the pipeline runs successfully and deploys the application to the K8s cluster.
4. **Additional Tasks💫**
   - Set up a notification system to alert on pipeline failures or successes.
   - Document the pipeline setup and deployment process in a README file.

## Submission

- Create a `task_6` branch from `main` in your repository.
- Provide a PR with the application, Helm chart, and Jenkinsfile in a repository.
- Provide a screenshot of passed Jenkins pipeline
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

5. **Additional Tasks (30 points)💫**
   - **Application Verification (10 points)**
     - Application verification is performed (e.g., curl main page, send requests to API, smoke test).
   - **Notification System (10 points)**
     - A notification system is set up to alert on pipeline failures or successes.
   - **Documentation (10 points)**
     - The pipeline setup and deployment process, are documented in a README file.
