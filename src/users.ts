interface users {
  staticPassword: string;
  emailAddress: string;
  enabled: boolean;
  Locked: boolean;
  mobilePhoneNumber: string;
  phoneNumber: string;
  vdpDeliveryMethod: string;
}

export type {users};

/*
staticPassword String
Longitud mínima: 8
Longitud máxima: 255
Ejemplo: user01
Descripción: contraseña estática del
usuario.
emailAddress String
Longitud máxima: 64
Ejemplo: user01@empresa.com
Descripción: cuenta de correo electrónica
asociada a la identidad del usuario.
enabled Booleano
Ejemplo: True
Descripción: Indica si la cuenta de
usuario debe quedar habilitada o no al
término del servicio.
Locked Booleano
Ejemplo: False
Descripción: Indica si la cuenta debe
quedar con estatus bloqueado o no al
término del servicio.
mobilePhoneNumber String
Longitud máxima: 64
Ejemplo: +52-55-1396-1234
Descripción: Numero móvil del usuario.
Puede utilizarse para envío de mensajes
SMS si el servicio se encuentra activo.
phoneNumber String
Longitud máxima: 20
Ejemplo: +52-55-1234-5678
Descripción: Número de teléfono fijo del
usuario.
vdpDeliveryMethod String
Opciones: (4) – SMS / Email / Voice /
Default
Ejemplo: Email
Descripción: Metodo preferido para el
envío de un OTP Virtual.
*/
