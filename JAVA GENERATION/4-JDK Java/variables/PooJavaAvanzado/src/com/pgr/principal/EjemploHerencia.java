package com.pgr.principal;

import com.pgr.herencia.BasePadre;
import com.pgr.herencia.Ejecutar;
import com.pgr.herencia.Hija;
import com.pgr.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Ejecutar ejecutar=new Ejecutar();
        ejecutar.ejecutar();

        Hija objH = new Hija();
        objH.visualizarA();

        Hijo objHo = new Hijo();
        objHo.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(636);

        System.out.println("Atributo de clase base: "+objH.getA());

    }
}
