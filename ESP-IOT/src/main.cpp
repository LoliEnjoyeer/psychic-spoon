#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebServer.h>

AsyncWebServer server(8080);

String serverName = "http://192.168.101.41:3000/";

unsigned long lastTime = 0;

void callAPI() {
  if(WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;

    String serverPath = serverName;
    http.setTimeout(10000);
    http.begin(serverPath.c_str());

    int httpResponseCode = http.GET();
    Serial.print(httpResponseCode);

    if(httpResponseCode > 0) {
      Serial.print("HTTP REsponse code: ");
      Serial.println(httpResponseCode);
      String payload = http.getString();
      Serial.println(payload);
    }
    else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
  lastTime = millis();
}

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
  callAPI();

}

void setServer()
{
  server.on("/test", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", "ergergerg");
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