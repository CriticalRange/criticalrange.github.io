# Getting PojavLauncher

## Android

* Getting PojavLauncher on Android is divided into 3 parts:

1. [Releases & GitHub Actions](/guide/getting-pojavlauncher.md#releases-github-actions)

2. [Google Play](/guide/getting-pojavlauncher.md#google-play)

3. [Building from source](/guide/getting-pojavlauncher.md#building-from-source)

# iOS

* Getting PojavLauncher on iOS is divided into 2 parts:

1. [Jailbroken Installation](/guide/getting-pojavlauncher.md#jailbroken-installation)

2. [Non-Jailbroken Installation](/guide/getting-pojavlauncher.md#non-jailbroken-installation)

### Releases & GitHub Actions
1. You can get prebuilt app from [stable releases](https://github.com/PojavLauncherTeam/PojavLauncher/releases) or [automatic builds](https://github.com/PojavLauncherTeam/PojavLauncher/actions).

### Google Play
2. You can get it from Google Play by clicking [here](https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch) or by clicking the badge below:
[![Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch)

::: warning
PojavLauncher is removed from the shelves of Google Play. It is advised to use [this GitHub Action](https://github.com/PojavLauncherTeam/PojavLauncher/actions/runs/2876960499)
:::

### Building from source

* Even though it is well-explained, building from source requires skill, internet and time.

* You can try building on Android with [Termux](https://termux.dev), but no support will be included for it.

* It is recommended to clone the PojavLauncher repository before starting [Setting Up JRE](https://criticalrange.github.io/guide/getting-pojavlauncher.html#setting-up-jre)

* ```git clone https://github.com/PojavLauncherTeam/PojavLauncher```

#### Setting up JRE

* You can download it from [CI Auto Builds](https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions) if you don't want to/can't build.

* Source: [PojavLauncherTeam/android-openjdk-build-multiarch](https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch)

##### Android

* Clone the git repository of PojavLauncherTeam/android-openjdk-build-multiarch

```
git clone https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch
```

* cd to the cloned repository

```
cd android-openjdk-build-multiarch
```

* Download Android NDK r10e from [here](https://github.com/android/ndk/wiki/Unsupported-Downloads#r10e) and place it in this directory with a file explorer. (Can't automatically download because of EULA)

::: warning
Do not attempt to build using a newer or older NDK, it will lead to compilation errors.
:::

##### iOS

* Get the latest [Xcode](https://developer.apple.com/xcode/) (tested with Xcode 12).

###### Platform and architecture specific environment variables

| Platform | Architecture | Target | Target_JDK |
| --------- | ---------- | ---------- | --------- |
| Android | armv8/aarch64 | aarch64-linux-android | aarch64 |
| Android | armv7/aarch32 | arm-linux-androideabi | arm |
| Android | x86/i686 | i686-linux-android | x86 |
| Android | x86_64/amd64 | x86_64-linux-android | x86_64 |
| iOS/iPadOS | armv8/aarch64 | aarch64-macos-ios | aarch64 |

###### Building JRE (Java Runtime Environment)

:::: code-group
::: code-group-item Android
```bash
export BUILD_IOS=0
```
:::
::: code-group-item iOS
```bash
export BUILD_IOS=1
```
:::
::::

```export BUILD_FREETYPE_VERSION=[2.10.4]```

::: tip
You can use versions **between 2.6.2 and 2.10.4** but **2.10.4** is preferred.
:::

```export JDK_DEBUG_LEVEL=[release]```

::: tip
You can use **release**, **fastdebug** and **debug**, but **release** is preferred
:::

```export JVM_VARIANTS=[client]```

::: tip
You can use **client** and **server** variants, **Client** is for **aarch32** and **server** is for **other architectures**
:::

(Android only)

```./extractndk.sh```

```./maketoolchain.sh```

* Get CUPS, Freetype and build Freetype

```./getlibs.sh```

```./buildlibs.sh```

* Clone JDK, run once

```./clonejdk.sh```

* Configure JDK and build

```./buildjdk.sh```

::: tip
If no configuration is changed, run ```sh makejdkwithoutconfigure.sh``` instead
:::

* And finally, pack the built JDK

```./removejdkdebuginfo.sh```

```./tarjdk.sh```

#### LWJGL

* Coming soon

#### Building the Launcher

##### Updating translations

* Updating translations is easier thanks to language list updater scripts

* Just run this command and it'll be automatically updated from Crowdin.

:::: code-group
::: code-group-item Windows
```bat
scripts\languagelist_updater.bat
```
:::
::: code-group-item Linux/MacOS
```bash
chmod +x scripts/languagelist_updater.sh
bash scripts/languagelist_updater.sh
```
:::
::::

##### Build GLFW Stub

:::: code-group
::: code-group-item Windows
```gradlew
./gradlew :jre_lwjgl3glfw:build
```
:::
::: code-group-item Linux/MacOS
```gradle
gradle :jre_lwjgl3glfw:build
```
:::
::::

##### Build the Launcher

:::: code-group
::: code-group-item Windows
```gradlew
./gradlew.bat :app_pojavlauncher:assembleDebug
```
:::
::: code-group-item Linux/MacOS
```gradle
./gradlew :app_pojavlauncher:assembleDebug
```
:::
::::

### Jailbroken Installation


### Non-Jailbroken Installation

