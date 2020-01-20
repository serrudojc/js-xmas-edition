function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  //testear tmb el caso positivo
  console.assert(
      validarNombre('Fabricio') === '',
      'validarNombre falló con un nombre valido'
  )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validarCiudad no funcionó con un nombre de ciudad válido'
    );

    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacio',
        'validarCiudad no mostró un error cuando la ciudad es vacia'
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacio',
        'La funcion validar descripcion regalo no validó que el campo no esté vacio'
    );

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'El campo descripcion es muy largo',
        'La funcion validar descripcion regalo no validó que el campo no sea muy largo'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'la funcion validar descripcion regalono funcionó con una descripción correcta'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();