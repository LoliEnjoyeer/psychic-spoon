#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebServer.h>

AsyncWebServer server(8080);

String serverPath = "http://192.168.0.188:3000/";
HTTPClient http;

void setWiFi() {
  char* ssid = "candy";
  char* password = "12332111";
  WiFi.begin(ssid, password);
  Serial.println(WiFi.status());

  while(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
  }
  
  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());
}

// void callAPI() {
//     http.begin(serverPath.c_str());
//     int httpResponseCode = http.GET();
//     Serial.print(httpResponseCode);

//     if(httpResponseCode > 0) {
//       Serial.print("HTTP REsponse code: ");
//       Serial.println(httpResponseCode);
//       String payload = http.getString();
//       Serial.println(payload);
//     }
//     else {
//       Serial.print("Error code: ");
//       Serial.println(httpResponseCode);
//     }
      //http.end();
// }



void setServer()
{
  http.setTimeout(10000);

  server.on("/ESPHello", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(200, "text/plain", "ergergerg");
  });

  server.begin();
}

void setup()
{
  Serial.begin(115200);
  setWiFi();
  setServer();
}

void loop() {
 
}