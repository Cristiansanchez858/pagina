#ejemplo de try catch en python
try:
    
    numero = int(input("Ingresa un número: "))
    resultado = 10 / numero
    #intenta dividir 10 entre el numero ingresado
    #endado caso de que sea 0 se genera ZEroDivisionError
    print(f"El resultado es: {resultado}")  

except ValueError:
    print("Error: Debes ingresar un número válido")

except ZeroDivisionError:
    print("ERror, no te pases, no sabes dividir, no se divide entre 0")

except Exception as e:
    print(f"Error inespereado: {e}")
    
finally:
    print("Este bloque siempre se ejecuta")




 
