# AGENTS.md

## Project

**BIDLIFE** — an auction site (경매 사이트). School final project for a web programming course.
Spec is in `project.txt` (Korean). Much of the auction functionality is not yet implemented; current code covers login, signup, and a basic board.

## Stack

- Spring Boot **4.0.6** (Jakarta namespace, not javax), Java 17, Gradle
- Spring Data JPA + Thymeleaf + Lombok
- MySQL (localhost:3306, db `info`, user/pass `server`/`server`)
- Server port: **7001**

## Commands

```
./gradlew bootRun          # run dev server on :7001
./gradlew test             # run tests (JUnit 5)
./gradlew build            # full build
```

## Key gotchas

- **`src/main/resources/application.properties` is gitignored.** You must create it to run the app. Minimum content:
  ```
  spring.application.name=final_project
  server.port=7001
  spring.datasource.url=jdbc:mysql://localhost:3306/info?allowPublicKeyRetrieval=true&useSSL=false
  spring.datasource.username=server
  spring.datasource.password=server
  spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
  spring.jpa.hibernate.ddl-auto=update
  spring.thymeleaf.cache=false
  ```
- **Package directories use PascalCase** (`Controller`, `DTO`, `Entity`, `Repository`). Match this convention when adding new classes.
- **No Service layer exists yet.** Controllers currently reference DTOs and repositories directly. Follow this pattern until a service layer is introduced.
- **Schema is managed by Hibernate `ddl-auto=update`** — no Flyway/Liquibase migrations.
- **MySQL must be running** before `bootRun`. No embedded DB fallback is configured.

## URL routes (planned from project.txt)

| Path | Purpose |
|---|---|
| `/` | Home |
| `/login`, `/signup` | Auth |
| `/account`, `/account/bids`, `/account/items`, `/account/watchlist` | User account |
| `/items`, `/items/new`, `/items/{id}`, `/items/{id}/bid` | Auction items & bidding |
