# FSD Bootcamp Day 06 | 26 June 2025

## Why do we need Database?

- To store data
- Persist the data - a layer for permanently storing data
- Stucture over data
  - querying - extracting insights from database
  - MySQL - stuctured - schema is defined

## MongoDB

- NoSQL
- schemaless
- document based
- migration
  - **Migration Script**: A step-by-step instruction file that safely changes database structure (add/remove tables, columns, etc.) in a controlled, reversible way.
  - **Purpose**: Keeps database changes organized, trackable, and consistent across different environments (dev, test, production) so everyone's database looks the same.
- Analogous Nomenclature
  - `table` --> `collection`
  - `row` --> `document`
  - `null` --> not a limitation

## Docker

- its like a OS within a OS
- or like Java runtime - platform independency
- containerised environment

## Kubernetes vs Docker - Quick Reference

**Docker**: A tool that packages applications and their dependencies into lightweight, portable containers that can run anywhere consistently.

**Kubernetes**: An orchestration platform that manages, scales, and coordinates multiple Docker containers across clusters of servers automatically.

<details><summary>Key Differences</summary>

| Aspect                | Docker                                 | Kubernetes                                   |
| --------------------- | -------------------------------------- | -------------------------------------------- |
| **What it does**      | Creates and runs individual containers | Manages and orchestrates multiple containers |
| **Scope**             | Single container on one machine        | Multiple containers across multiple machines |
| **Think of it as**    | A shipping container                   | The port manager organizing all containers   |
| **Primary job**       | Package apps → Run containers          | Deploy → Scale → Monitor → Heal containers   |
| **Complexity**        | Simple, single-purpose tool            | Complex orchestration platform               |
| **Use case**          | Dev environments, simple deployments   | Production environments, large-scale apps    |
| **Scaling**           | Manual (you start/stop containers)     | Automatic (scales based on demand)           |
| **High availability** | No built-in redundancy                 | Built-in redundancy and failover             |
| **Learning curve**    | Beginner-friendly                      | Requires significant learning                |

## Simple Analogy

- **Docker** = Individual food truck (one container, one location)
- **Kubernetes** = Food court manager (coordinates multiple trucks, handles customers, manages supply chains)
</details>


## Docker Image - Quick Notes

### What is it?
**Docker Image** = Read-only template/blueprint that contains everything needed to run an application (code, runtime, libraries, configs).

### Simple Analogy
- **Image** = Cookie cutter (template)
- **Container** = Actual cookie (running instance)

### Key Points
- **Portable** - runs same way everywhere
- **Layered** - built in stackable pieces
- **Immutable** - can't change, only rebuild
- **Creates containers** when run

### In Docker Desktop
Find images in the "Images" tab showing:
- Downloaded images (`nginx`, `python:3.9`)
- Custom built images
- Size and tags (`latest`, `v1.0`)

## Setup
- image add

## indexes
- stores id by default
- for fast retreiveal

## Further Discussion
- Mongo DB
- Mongo Compass
  - CRUD Operations
- Docker GUI
- Mongose