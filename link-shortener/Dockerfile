FROM maven:3.5.2-jdk-8-alpine AS MAVEN_BUILD

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn clean package spring-boot:repackage

FROM openjdk:8-jre-alpine

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target /app/

EXPOSE 6060
ENTRYPOINT ["java", "-jar", "urlshortener-0.0.1.jar"]   
