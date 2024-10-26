class Logger {
    private static instance: Logger;
    private mensajeContador: number = 0;
    
    private constructor() {

    }
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    } 
    public mostrarMensaje(mensaje: string): void {
      this.mensajeContador++;
      console.log("[${this.mensajeContador}] ${mensaje}");
    }
} 
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.mostrarMensaje("Primer mensaje");
logger2.mostrarMensaje("Segundo mensaje");
  


  