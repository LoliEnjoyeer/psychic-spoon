#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>

AsyncWebServer server(80);

String serverPath = "http://192.168.137.1:3000/UpdateData";
HTTPClient http;

void setWiFi() {
  char* ssid = "candy";
  char* password = "12332111";
  WiFi.begin(ssid, password);

  while(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
  }
  
  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());
}

unsigned long lastTime = 0;
unsigned long timerDelay = 20000;

void setServer()
{
  http.setTimeout(10000);

  server.on("/ESPRequest", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(200, "text/plain", "ESP Response");
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
    delay(20000);
    StaticJsonDocument<200> jsonDocument;
    jsonDocument["data1"] = random(10000);;
    jsonDocument["data2"] = random(10000);;
    jsonDocument["data3"] = random(10000);;

    String jsonString;
    serializeJson(jsonDocument, jsonString);

    http.begin(serverPath.c_str());
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.POST(jsonString);
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