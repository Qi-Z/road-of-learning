# Docker
Tutorial from https://docs.docker.com/get-started/#docker-concepts

## Table of Content
1. Set up your Docker environment
2. Build an image and run it as one container
3. Scale your app to run multiple containers
4. Distribute your app across a cluster
5. Stack services by adding a backend daatabase
6. Deploy your app to produciton

## What is Docker
Docker is a platform for developers and sysadmins to **develop, deploy, and run applications** with containers. using Linux containers to deploy applications is called containerization. 

## Why Containers
* Flexible: from small to large applications, from simple to complicated applications, all can be containerized.

* Lightweight: Containers leverage and share the host kernel. It is lightweight compare to virtual machine

* Interchangealbe: you can deploy updates and upgrades on-the-fly. To my understanding, to update, we just update the image, and then run it in container.

* Portable: you can build locally, deploy to the cloud and run anywhere

* Scalable: you can increase an automatically distribute container replicas. Sounds fair to me, just run many images with many containers

* Stackable: you can stack services vertically and on the fly. what is stacking services vertically.

## Image and container
**A container is launched by running an image.**
