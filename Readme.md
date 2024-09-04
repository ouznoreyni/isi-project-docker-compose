# Projet Todo App

Une application simple de gestion de tâches avec un backend Java Spring Boot, un frontend React, et une base de données MySQL.

## Prérequis

- Docker
- Docker Compose

## Structure du projet

```
projet/
│
├── backend/
│   ├── src/
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── nginx/
│       └── nginx.conf
│
└── docker-compose.yml
```

## Démarrage rapide

1. Clonez le dépôt :
   ```
   git clone git@github.com:ouznoreyni/isi-project-docker-compose.git
   cd isi-project-docker-compose
   ```

2. Lancez l'application :
   ```
   docker-compose up --build
   ```

3. Accédez à l'application :
   - Frontend : http://localhost
   - Backend API : http://localhost:8080/api
   - Base de données : localhost:3306

## Arrêt de l'application

Pour arrêter l'application et supprimer les conteneurs, utilisez :
```
docker-compose down
```

Pour arrêter l'application, supprimer les conteneurs ET les volumes (cela effacera toutes les données persistantes), utilisez :
```
docker-compose down -v
```

## Développement

- Backend : Le code source se trouve dans `backend/src/`
- Frontend : Le code source se trouve dans `frontend/src/`

Pour des modifications, mettez à jour le code source approprié et relancez `docker-compose up --build`.

## Gestion des données

- Les données de la base de données sont persistées dans un volume Docker.
- Utilisez `docker-compose down -v` avec précaution, car cela supprimera toutes les données stockées.

## Developpeur
Ousmane DIOP
