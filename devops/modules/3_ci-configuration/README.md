# Module 3: Jenkins Server Installation and Configuration

## Preface

In this module you need to install Jenkins CI server to your k8s cluster and configure your first pipeline.

## Task 1. Installation and configuration of a Jenkins server

There are multiple ways to install Jenkins on a K8s cluster. In this task you need to install Jenkins using a Helm chart. Note that Helm should be installed prior on your computer, where you have kubectl configured to access the cluster from the previous module. See [HELM Documentation](https://helm.sh/) for more details on Helm installation. You may verify your Helm installation by deployment and removal of [Nginx chart](https://artifacthub.io/packages/helm/bitnami/nginx).

When done with Helm, install Jenkins using the instruction from [Jenkins documentation](https://www.jenkins.io/doc/book/installing/kubernetes/#install-jenkins-with-helm-v3). Make sure that Jenkins is installed into a separate namespace.

When Jenkins installation is done, you may verify it by creation of a really simple freestyle project, which should do nothing but writing "Hello world" into the log.

**This task is considered as done if all the conditions below are met:**

- you have Jenkins server deployed to your cluster;
- Jenkins is available from the internet via an encrypted connection;
- you are able to run a simple Jenkins project;
- Jenkins configuration is stored on a persistent volume and not being lost when Jenkins' pod is terminated.

## Task 2. HELM chart creation

In this task you need to create HELM chart for [Given Application](../../flask_app/). Using [helm tool](https://helm.sh/docs/helm/helm_create/) create a HELM chart for your application and adjust it to fit your needs.

1. A Docker image(s) for your application. The image(s) should be stored in the [public image registry](https://hub.docker.com). Note, that your k8s nodes should be able to access this repository as well.
2. A Helm chart for your application. The chart should handle configuration of all the components (like configmaps, deployments, etc.), which are required to run the application withing a K8s cluster. See Helm documentation for more details on this step. During the development of the chart, you may test it manually from your computer, where Helm is installed.

**This task is considered as done if all the conditions below are met:**

- your built artifacts are stored within git (Dockerfile, Helm chart) and ECR (Docker image);

## Task 3. A pipeline configuration

In this task you need to configure full CI/CD pipeline for your project (i.e. the pipeline should cover such software lifecycle phases as build, testing and deployment).

Artifacts from previous task (Dockerfile and Helm chart) should be stored in a git repository, which will be available to Jenkins. You may use your application's main repository as well.

The next step is to configure a Jenkins pipeline. The pipeline should be stored in a form of Jenkinsfile in your main git repository, and be triggered on each push event on this repo. The pipeline should contain the following steps:

1. Application's build;
2. Unit test's execution;
3. Security check with SonarQube;
4. Docker image building and pushing to public registry. This step is supposed be triggered manually;
5. Deployment of an application's build into your k8s cluster with Helm. This step should depend on the previous one.
6. (Optional) Application's verification (curl main page, send requests toward API if any, etc.) You may run a smoke test on this step as well.

**This task is considered as done if all the conditions below are met:**

- your pipeline has all steps from the description above.
