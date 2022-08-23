public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Hugo";
        String saludo = "Hola esto es un ejemplo de variable";

        System.out.println(saludo +  " " + nombre);
        char espacio ='\u0064';
        char caracter = 'a';
        System.out.println("espacio = "  + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor máximo: " + Character.MAX_VALUE);
        System.out.println("char valor mínimo: " + Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en bytes: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor máximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        float numeroFloat = 0.00000000015f; //1.5e-10f
        System.out.println("numeroFloat = " + numeroEntero);
        System.out.println("float corresponde en bytes: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor máximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroEntero);
        System.out.println("double corresponde en bytes: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor máximo: " + Double.MAX_VALUE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);

        long valorLong = 1;
        System.out.println("numeroLong = " + numeroEntero);
        System.out.println("Long corresponde en bytes: " + Long.BYTES);
        System.out.println("Long corresponde en bits: " + Long.SIZE);
        System.out.println("Long valor máximo: " + Long.MAX_VALUE);
        System.out.println("Long valor minimo: " + Long.MIN_VALUE);

        byte valorByte = 1;
        System.out.println("numeroByte = " + numeroEntero);
        System.out.println("Byte corresponde en bytes: " + Byte.BYTES);
        System.out.println("Byte corresponde en bits: " + Byte.SIZE);
        System.out.println("Byte valor máximo: " + Byte.MAX_VALUE);
        System.out.println("Byte valor minimo: " + Byte.MIN_VALUE);

        short valorShort = 1;
        System.out.println("numeroShort = " + numeroEntero);
        System.out.println("Short corresponde en bytes: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " + Short.SIZE);
        System.out.println("Short valor máximo: " + Short.MAX_VALUE);
        System.out.println("Short valor minimo: " + Short.MIN_VALUE);

        var miVar = '2';
        System.out.println("miVar = " + miVar);



    }
}
