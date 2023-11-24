#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>

AsyncWebServer server(80);

String serverPath = "http://192.168.137.1:3000/UpdateData";
HTTPClient http;

void setWiFi()
{
  char *ssid = "candy";
  char *password = "12332111";
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
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

  server.on("/ESPRequest", HTTP_GET, [](AsyncWebServerRequest *request)
            {
      StaticJsonDocument<100> data;
    if (request->hasParam("message"))
    {
      data["message"] = request->getParam("message")->value();
    }
    else {
      data["message"] = "No message parameter";
    }
    String response;
    serializeJson(data, response);
    request->send(200, "application/json", response); });

  server.begin();
}

void setup()
{
  Serial.begin(115200);
  setWiFi();
  setServer();
}

void loop()
{
  delay(20000);
  StaticJsonDocument<200> jsonDocument;
  jsonDocument["temperature"] = random(-5, 30);
  jsonDocument["slpressure"] = random(995, 1025);
  jsonDocument["rain"] = random(0, 100);

  String jsonString;
  serializeJson(jsonDocument, jsonString);

  http.begin(serverPath.c_str());
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(jsonString);
  Serial.print(httpResponseCode);
  if (httpResponseCode > 0)
  {
    Serial.print("HTTP REsponse code: ");
    Serial.println(httpResponseCode);
    String payload = http.getString();
    Serial.println(payload);
  }
  else
  {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }

  http.end();
}