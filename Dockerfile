
FROM openjdk:17-jdk-slim as android-sdk

ENV ANDROID_SDK_ROOT=/opt/android
ENV ANDROID_SDK_VERSION=11076708
ENV PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools

RUN apt-get update && apt-get install -y wget unzip && \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-${ANDROID_SDK_VERSION}_latest.zip -O android-sdk.zip && \
    mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    unzip -q android-sdk.zip -d $ANDROID_SDK_ROOT/cmdline-tools && \
    mv $ANDROID_SDK_ROOT/cmdline-tools/cmdline-tools $ANDROID_SDK_ROOT/cmdline-tools/latest && \
    rm android-sdk.zip

RUN yes | sdkmanager --licenses && \
    sdkmanager "platforms;android-34" "build-tools;34.0.0" "platform-tools"


FROM node:18-bookworm-slim

COPY --from=android-sdk /opt/android /opt/android

ENV ANDROID_SDK_ROOT=/opt/android
ENV PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]



# docker exec -it screenmaster_app /bin/bash