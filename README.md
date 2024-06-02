Alp Eren Gürle
SOLID prensiplerine uygun bir şekilde Rick & Morty çizgi dizisinin açık API aracılığı ile React
Native alt yapısı kullanılarak çizgi karakterleri tanıtan bir uygulama hazırlanmıştır.
Proje Gereksinimleri :
●  Her bölüme ait tüm karakter ve özelliklerini gösteren kartlar için sayfalama
● Her bir listeleme için (Bölümler, karakterler vb. ) herhangi bir karakter ismi veya
özelliklerine göre search
● Herhangi bir bölüme ait gelen bilgiler uygulama üzerinde gösterilmiştir.
● Karakterler listeleniyor ayrıca karakter ile ilgili bilgiler ekrana dökülüyor.
● favori karakter seçimi yapılır ayrıca favori karakter sayfası oluşturulmuştur 10 taneden fazlaya izin verilmemiştir. sil butonu yer almaktadır. Ekran resimlerinde her şey yer almaktadır.

## Step 1: Uygulamayı açtığımızda bizi bölümlerin listelendiği sayfa karşılamaktadır. Buradan arama yapmadan manuel olarak next diğerek diğer sayfaya geçiş yapıp bölümleri inceleyebiliriz
## Step 2: Search Episodes butonuna basarsak arama yapabileceğimiz sayfaya yönlendiirir buradan aramak istediğimiz bölümün adını giriyoruz ve o bölüm karşımıza çıkıyor çıkmak için x tuşuna basıyoruz bizi ana sayfaya yönlendiriyor
## Step 3: İstediğimiz bölüme bastığımızda bizi EpisodeDetail sayfası karşılıyor. Burada bölümün adını yayın tarihini ve o bölümde oynamış karakterleri görebiliyoruz.
## Step 4: Bölümde oynamış bir karaktere basınca CharacterDetail sayfasına yönlendiriyor. Burada karakterin resmini status, species, gender, origin ve location bilgilerini görüntülüyoruz eğer istersek favoriye ekliyoruz veya favoriden kaldırıyoruz.
## Step 2: Anasayfadan Search Characters butonuna basarsak bizi karakterlerin ismine veya özelliklerine göre arama  yapabileceğimiz ekrana yönlendiriyor arama butonu çıkıyor, burada istersek ismini, istersek status, species
gender, bilgisini arıyoruz bu sayfada o isme sahip karakterler veya  aynı özelliklere sahip karakterler ortaya çıkıyor bastığımızda yine characterdetail sayfasına yönlendiriyor
## Step 5:  Favoriler adlı sayfamız bulunmakta burada favoriye eklediğimiz karakterleri görüyoruz 10 taneden fazla karakter ekleyemiyoruz. Eklemek istediğimizde hata veriyor.  Kaldırmak istersek bize pop-up ekranında uyarı veriyor emin misiniz diye evete basarsak karakter siliniyor

![Screenshot_1717294382](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/909c201c-d494-4b22-9924-1b747acecaba)
![Screenshot_1717295431](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/ccc1f43b-6412-4b0c-9ad8-b1af32b91d0d)
![Screenshot_1717295454](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/dbdbc5ee-c56e-4de6-9864-f61b527f9455)
![Screenshot_1717294415](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/883fab36-565a-46c3-ba0e-68c68f53e847)
![Screenshot_1717294419](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/3a461608-0ae9-4757-afed-e3b5b5e50769)
![Screenshot_1717294423](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/aabf7bac-875f-4a7f-9cc9-37abc17609c9)
![Screenshot_1717294425](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/7ceb036b-5d51-4ed8-a143-b9108ec9a12b)
![Screenshot_1717294430](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/a7628a76-c411-4406-8dbd-fa70c89a9455)
![Screenshot_1717294433](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/461a9804-8f41-4ecd-8807-a071416ad8ee)
![Screenshot_1717294446](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/6e3bcfce-fe13-4b7e-a564-18f0ba76e163)
![Screenshot_1717294452](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/70fa962d-92fe-42b1-9eea-5d0b2df77aed)
![Screenshot_1717294464](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/9af57f46-0f8f-4e79-a7cf-c839a122b991)
![Screenshot_1717294465](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/dcad3abb-69fd-450c-9a55-cda5ed69a965)
![Screenshot_1717294472](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/d4600929-e658-4d92-968d-c9a00d0e24f9)
![Screenshot_1717294474](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/84ef4570-cf7f-4e59-a0d8-fcd8ffcee6ca)
![Screenshot_1717294474](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/2484b0e0-a076-46c4-8c8d-b86ffe1d2173)
![Screenshot_1717294509](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/19e99cd5-008d-471b-a78d-78756e95b948)
![Screenshot_1717294512](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/72a15971-b409-4f7e-a432-581313b94e13)
![Screenshot_1717294526](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/fe42a7d8-aef4-4cc6-91cf-b0b0d57e82f7)


![Screenshot_1717294530](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/e3b06ec5-53ba-4ac5-8792-194023022ddc)
![Screenshot_1717294554](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/b45e36ef-fe09-45f7-af3f-6aa4bf2a9fb4)
![Screenshot_1717294559](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/c06bc9f5-a851-4209-a066-3487c4d5fe82)
![Screenshot_1717294564](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/66ffa38b-664e-4272-b8b2-e295c2f88793)
![Screenshot_1717294570](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/839a2b0a-299d-4a20-bc81-c4d9b2908c3c)
![Screenshot_1717294572](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/e8da6733-9482-4747-82d0-95329d95ca51)
![Screenshot_1717294578](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/7252bedf-0640-4ea5-baea-3bd7ee68e436)
![Screenshot_1717294580](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/85201308-684d-432f-8d03-9a8e0280810e)
![Screenshot_1717294584](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/ef4d09dc-2380-442b-af6d-19c7cc7ca045)


![Screenshot_1717294587](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/5f59284e-8e2f-4e28-b0c8-7569e348cfda)
![Screenshot_1717294589](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/45929906-bc6a-4818-8752-ddb762c610d8)
![Screenshot_1717294592](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/49f88221-1be9-4a9e-9363-89b9f0ef4a00)
![Screenshot_1717294594](https://github.com/alpgurlee/RickAndMortyApp/assets/66573571/5c6bdf12-aa52-442b-beb1-2bbfcb9be39c)



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
