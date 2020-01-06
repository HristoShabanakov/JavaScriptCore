## <p align="center"> **JavaScript Applications Exam – 04 August 2019** </p>

The below description of the JavaScript Applications Exam”, part of **C# Web Developer** programme at <a href="https://platform.softuni.bg/">Software University</a>.<br>

Students have 4 hours to implement a **Web application** (Single Page Application) using **HTML5**, **JavaScript**, **AJAX**, **REST** and **JSON** with cloud-based backend (Kinvey). Using libraries like **jQuery**, **Handlebars** and **Sammy** is allowed. The app keeps **users** and **offers**. **Guests** should be able to **register** and **login**. Logged-in users should be able to view **all offers (dashboard)**, **create and view offers** and **logout**. Logged-in users should also be able to **edit** or **delete** the offers **they have created**.

## 01.SoftBay - Client-Side Web Application

**Design** and **implement** a client-side front-end app (SPA) for managing **offers**. Implement the functionality described below.

**Navigation Bar (Header)**

Navigation links should correctly change the current page (view).
* Clicking on the links in the **NavBar** should display the view behind the link (views are represented as sections in the HTML code).
* Your application must display the views it needs to display.
* The **Logged-in user** navbar should contain the following elements: **[SoftBay], [Dashboard], [Create Offer]** and **[Logout]**.

![Nav bar](https://user-images.githubusercontent.com/32416999/71799091-a0b7af00-3054-11ea-9015-589467c9e77b.png)

 **Guest users** navbar should contain the following elements: **[SoftBay]** and **[Login]**.
![NavBar](https://user-images.githubusercontent.com/32416999/71799441-96e27b80-3055-11ea-9407-442b78191bd6.png)

**Register Page** 



By given **username** and **password**, the app should register a new user in the system.
* The following **validations** should be made:
* The **username** and **password** must be **non-empty string**.
* The **re-password** should **match the password**.
* After a **successful registration, home page** should be displayed **with the correct navigation bar**.
* Keep the user session data in the browser's **session or local storage**.

![RegisterPage](https://user-images.githubusercontent.com/32416999/71799659-43bcf880-3056-11ea-8440-b5a90f19ce9e.png)




<p align="center"> <b>[Login] button</b> should refer to the <b>register form (view)</b>. </p>

## Login Page 
By given **username** and **password**, the application should **login** an existing user.
* After a **successful login**, a **home page** should be displayed with the **correct navigation bar**.
* Keep **user** session data in the browser's **session or local storage**.

![Login](https://user-images.githubusercontent.com/32416999/71800330-1f621b80-3058-11ea-904b-3e6715d1fa94.png)

<p align="center"> <b>[Register] button</b> should refer to the <b>register form (view)</b>. </p>

## Logout 
Successfully logged in users should be able to **logout** from the application.
* After a **successful** logout the **home page for guest users** should be shown.
* The **"logout" REST service** at the back-end  **must** be called at logout.
* All local information in the browser **(user session data)** about the current user **should be deleted**.

## Home Page 
* The initial page (view) should display the **navigation bar for guest users + Home Page + Footer**.
* **[SoftBay] button** should refer to the **home page (view)**.

![HomePage](https://user-images.githubusercontent.com/32416999/71802436-f47ac600-305d-11ea-9792-b8c335bc0fd9.png)

If **user is logged-in** the page (view) should display the **navigation bar logged-in users + Home Page + Footer**.

![HomePageLogin](https://user-images.githubusercontent.com/32416999/71802613-7e2a9380-305e-11ea-9001-248431793aad.png)

## Create Offer 
**Logged-in users** should be able to **Create offers**.<br>
Clicking the **[Create Offer] link** in the **NavBar** should **display** the **Create Offer page**.
* The form should contain the following **validations**:
* The input fields for **product, description** and **price** should be **non-empty strings**.
* The input field for **imageUrl**, must be **valid url refering to picture**.
* After a **successful** offer creation the **Dashboard** should be shown.
* The newly created offer should be stored in the Kinvey collection **"offers"**.

![CreateOffer](https://user-images.githubusercontent.com/32416999/71803499-39ecc280-3061-11ea-9ba5-07a5496ba09d.png)

## Dashboard 
By clicking over **[Dashboard]** button, the **currently logged-in user** should be able to see **all** created offers.
* The initial page (view) should display the **navigation bar for logged-in users + Dashboard + Footer**.
* If there are **NO** such offers, the following view should be displayed.

![DashboardEmpty](https://user-images.githubusercontent.com/32416999/71803862-28f08100-3062-11ea-9045-323234fa87f1.png)

If there is at least one registered offer, the offer must be shown like the example below in format:

![OfferDescription](https://user-images.githubusercontent.com/32416999/71804247-34907780-3063-11ea-8dee-2efa7e50eb2e.png)

![Offer](https://user-images.githubusercontent.com/32416999/71805896-b8e4f980-3067-11ea-9996-d2f4f52e9a58.png)

## Edit Offer
**Logged-in users** should be able to **edit** their **own offers**. 
* Clicking the **[Edit] link** of a **particular offer, Edit Offer Page** should be displayed with **already filled** input fields with the **current offer** information. 
* By cliking the **[Edit] button**, a put request should be send to the **offers collections** and the current offer **should be changed**.

![EditOffer](https://user-images.githubusercontent.com/32416999/71806232-96071500-3068-11ea-9187-1f1dcaeb7997.png)

## Delete Offer 
**Logged-in users** should be able to **delete their** offers. 
* Clicking the **[Delete] link** of an **particular offer** the **Offer Delete page** should be displayed with already filled information about that offer, but all input fields are disabled.
* If the **[Delete] button** in the **Offer Delete Page** is clicked, the current offer must be **deleted** from the DOM and from the Kinvey collection.
* After **successful offer delete** a **Dashboard page** must be shown.

![DeleteOffer](https://user-images.githubusercontent.com/32416999/71806527-4e34bd80-3069-11ea-97f4-a28de9f7f17e.png)

## Offer Details 
**Logged-in users** should be able to **view details** about offers. 
* Clicking the **[Order details] link** in of a **particular offer** should **display** the **Offer Details page**.
* The **product name, picture, description** and the **price** are shown in the format below on the picture.

![OfferDetails](https://user-images.githubusercontent.com/32416999/71806979-8688cb80-306a-11ea-982d-784e19abbd97.png)

## Notifications 
* In case of a **successful** action (create offer, login, registration, edit, delete), a **notification message (green)** should be shown, which disappears manually when the user clicks it. 

![Valid](https://user-images.githubusercontent.com/32416999/71807186-f9924200-306a-11ea-9e87-9403ad4952a8.png)

* In case of **error** (wrong passwords, wrong ajax call, authorization, etc...), an **error notification message (red)** should be shown, which disappears on user click.

![Invalid](https://user-images.githubusercontent.com/32416999/71807341-61e12380-306b-11ea-8469-52bfb688d478.png)

* During the **AJAX calls** a **loading notification message (blue)** should be shown. It should disappear automatically as soon as the AJAX call is completed.

![Loading](https://user-images.githubusercontent.com/32416999/71807467-af5d9080-306b-11ea-8a36-671ca6289af9.png)

## Buy an item  
* In these cases when some of the offers is **not made** from the currently logged-in user, in the section **"Actions"** must be added a **[Buy] button**. 
* By clicking it the **current product** must be **successfully bought by the user** (there are no quantities on the products, so you don’t have to remove them from the list or something else, just store the number of purchases in the knivey for the current user).

![BuyButton](https://user-images.githubusercontent.com/32416999/71807810-7671eb80-306c-11ea-905f-074c3ae5ddf5.png)

## Profile page

In the NavBar (header) must be added a new **link [Profile]** which refer to the **currently logged user**.

![Profile](https://user-images.githubusercontent.com/32416999/71808178-5f7fc900-306d-11ea-823d-ae0f89d15a7d.png)

![ProfilePage](https://user-images.githubusercontent.com/32416999/71808360-e765d300-306d-11ea-9f22-774a66ac1128.png)
