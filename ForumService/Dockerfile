# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0
COPY . /app
WORKDIR /app
EXPOSE 9150
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
RUN ["dotnet", "tool", "install", "--global", "dotnet-ef"]
ENV PATH $PATH:/root/.dotnet/tools
RUN chmod +x ./entrypoint.sh
CMD /bin/bash ./entrypoint.sh
ENV ASPNETCORE_URLS=http://+:9150;
