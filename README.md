# TreeBank

<img src="https://user-images.githubusercontent.com/67331469/119237402-fa6a2d80-bb12-11eb-87ce-7443ea0dcb73.png" width="100%" align="center"/>
Aplicación realizada con react native como proyecto final de Henry, se trata de una
billetera virtual donde puedes ver el saldo de tus cuentas en dólares y pesos, tarjetas,
movimientos, estadísticas y también realizar transferencias, depósitos, cambios de divisa y pagos simulados.

## 📋 Datos del proyecto...

✔️❌ **Estado:** Finalizado

📅⏰ **Fecha de comienzo y finalización:** 01/2021 - 02/2021

🔣⌨️ **Lenguajes utilizados:** Javascript | React native - expo

👨🏻‍💻 📋 **Tecnologías utilizadas:** BCrypt, Expo, Express, JWT, Moment, Multer, MySQL, Nodemailer, RN Elements, Passport, Redux, React Native Elements, React Native Paper, Sequelize, Victory Native.

💻📱 **Tipo:** Aplicación multi plataforma.



## 📎 Descripción del proyecto...
### Base de datos 
Base de datos gestionada en MySQL, utilizando Sequelize como ORM.

<p align="center">
  <img src="https://user-images.githubusercontent.com/67331469/119237358-c858cb80-bb12-11eb-818e-b163d8031945.png" width="70%" align="center"/>
</p>

### Backend
Backend programado en *NodeJS* y Express con deploy realizado en Heroku.
* La autenticación de los usuarios se realiza con Passport y JSONWebToken.
* La contraseña del usuario es encriptada mediante con bcrypt (mediante hash y salt).


### Frontend
Interfaz construida con *react native* y estado administrado con *redux*.
Para navegar dentro de la aplicación se utiliza una barra de navegación inferior y un drawer.

#### Pantallas

###### ChangeMoney
Pantalla de cambiar dinero, se puede cambiar entre dólares y pesos.
###### ChargeMoney
Pantalla de cargar dinero, se puede cargar dinero presentando el código en un local de pagos.
###### Contacts
Se le solicita permiso al usuario para acceder a los contactos de su telefono con el fin de filtrar los contactos usuarios de TreeBank e invitar a aquellos que no tienen una cuenta.
###### CVU (Cuentas)
En la pantalla 'Mis cuentas' se encuentrán los datos de las cuentas en pesos y dólares.
###### Discharge
Pantalla de alta de usuario, una vez que el usuario confirma su correo se le redirecciona a esta pantalla para que ingrese sus datos, al confirmarlos, se verifican y se le asigna un CVU a la cuenta.
###### Home
Pantalla inicial, ofrece la opción de registrarse o iniciar sesión.
###### Login
Formulario de inicio de sesión, en caso de que el dispositivo sea compatible se puede iniciar sesión con huella digital.
###### Main
Pantalla principal, ofrece las siguientes funcionalidades:
* Muestra dos tarjetas con información, una tarjeta corresponde a la cuenta en pesos y la otra a la de dólares, se puede seleccionar una cuenta u otra deslizando las tarjetas.
* Cuenta con un indicador de ingresos y gastos y un selector de período, la información que se muestra en el indicador depende de la cuenta seleccionada (posición de las tarjetas).
* Permite acceder a las pantallas de `Cargar dinero`, `Cambiar dinero` y `Enviar dinero`.
###### Products
Permite acceder a las pantallas de `Mis cuentas` y `Mis productos`.
###### Register
Formulario de registro. 
###### Statics
Pantalla de estadísticas, lista y grafica las compras, transferencias, cargas y pagos. 
###### Transactions
Lista las transacciones del usuario y le permite acceder al detalle de cada una.
###### Verify
Pantalla de verificación, es la pantalla a continuación de la de registro y su funcionalidad es que el usuario ingrese el código enviado a su correo electronico para verificar su cuenta.
### UserData
En la pantalla 'Mis datos' se encuentrán los datos del usuario, en donde también puede modificarlos.


## 🖼️ Imágenes del proyecto...

##### Pantallas de incio, inicio de sesión y registro.


<div>
  <img src="https://user-images.githubusercontent.com/67331469/119238532-33a59c00-bb19-11eb-8934-239d992f7752.jpg" width="32%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238533-343e3280-bb19-11eb-817c-d77e530825cb.jpg" width="32%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238531-330d0580-bb19-11eb-9079-3d820ed612cc.jpg" width="32%"/>
</div>




##### Pantalla principal y selector de período.
<div>
  <img src="https://user-images.githubusercontent.com/67331469/119238424-a8c4a180-bb18-11eb-8310-08f5b1d1e069.jpg" width="49%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238425-a8c4a180-bb18-11eb-8148-bb240adcc3b7.jpg" width="49%"/>
</div>




##### Pantallas de cargar, cambiar y enviar dinero.
<div>
  <img src="https://user-images.githubusercontent.com/67331469/119238426-a95d3800-bb18-11eb-8e71-d96a3be77e6e.jpg" width="33%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238427-a95d3800-bb18-11eb-9243-a3fa6ab2384d.jpg" width="33%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238428-a9f5ce80-bb18-11eb-82ec-1307af93c1ff.jpg" width="33%"/>
</div>




##### Pantalla de transacciones y detalle de transacción.
<div>
  <img src="https://user-images.githubusercontent.com/67331469/119238429-a9f5ce80-bb18-11eb-968e-2a93f0937ee0.jpg" width="49%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238430-aa8e6500-bb18-11eb-97df-833e2e8b976f.jpg" width="49%"/>
</div>



##### Pantalla de estadísticas y productos.
<div>
  <img src="https://user-images.githubusercontent.com/67331469/119238431-aa8e6500-bb18-11eb-92c6-1db1ce20071a.jpg" width="49%"/>
  <img src="https://user-images.githubusercontent.com/67331469/119238432-ab26fb80-bb18-11eb-9434-69e23b64c02f.jpg" width="49%"/>
</div>


## ✒️ Autores

* Agustín Tiseira
* Ariel Salcedo
* Harold Revelo
* Jorge Correa
* Julio Bermudez
* Santiago Aguirre
* Valentín Nicheglod 
