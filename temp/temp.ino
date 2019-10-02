
float temperatura = 0; //variable para la temperatura
 
void setup(){
 Serial.begin (9600); //inicia comunicacion serial
}
 
void loop(){
//Calcula la temperatura usando como referencia 5v
temperatura = (5 * analogRead(0)*100)/1024;
Serial.println (temperatura); //escribe la temperatura en el serial
delay (1000); //espera 1 segundos para la siguiente medicion


}
