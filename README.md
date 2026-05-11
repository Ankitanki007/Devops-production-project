# 🚀 DevOps Project — Docker + Kubernetes + CI/CD

A production-grade DevOps project built from scratch using Docker, Kubernetes, and GitHub Actions CI/CD pipeline.

## 🛠️ Tech Stack

- **Docker** — Containerization
- **Docker Compose** — Multi-service local development
- **Kubernetes** — Container orchestration (Minikube)
- **GitHub Actions** — CI/CD pipeline
- **DockerHub** — Container image registry
- **Node.js** — Application runtime

devops-project/
├── app.js                    # Node.js application
├── Dockerfile                # Docker image definition
├── docker-compose.yml        # Multi-service setup
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions pipeline
└── k8s/
├── deployment.yaml       # Kubernetes deployment
└── service.yaml          # Kubernetes service

## 🚀 Getting Started

### Run with Docker
```bash
docker build -t devops-app .
docker run -d -p 3000:3000 devops-app
curl http://localhost:3000
```

### Run with Docker Compose
```bash
docker compose up -d
curl http://localhost:3000
```

### Deploy to Kubernetes
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl get pods
minikube service my-app-service
```

## 🔄 CI/CD Pipeline

Every push to `main` branch automatically:

1. ✅ Runs tests
2. 🐳 Builds Docker image
3. 📦 Pushes to DockerHub
4. 🚀 App updated!

## 🐳 DockerHub Images

- `ankitdevops02/my-first-app:v1`
- `ankitdevops02/fullstack-app:v1`
- `ankitdevops02/cicd-app:latest`

## ☸️ Kubernetes Commands

```bash
# Deploy
kubectl apply -f k8s/

# Check pods
kubectl get pods

# Scale up
kubectl scale deployment my-app --replicas=5

# Rolling update
kubectl set image deployment/my-app my-app=ankitdevops02/my-first-app:v2

# Rollback
kubectl rollout undo deployment/my-app

# Dashboard
minikube dashboard
```

## 🔐 Security Practices

- All secrets stored in GitHub Secrets
- DockerHub Access Tokens (not passwords)
- Fine-grained GitHub tokens
- .env files in .gitignore
- Minimum permission principle

## 👤 Author

**Ankit** — [@ankitanki007](https://github.com/ankitanki007)

Docker: [@ankitdevops02](https://hub.docker.com/u/ankitdevops02)