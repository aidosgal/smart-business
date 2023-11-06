char ssid[] = "MARUA WIFI";
char pass[] = "123456789";

char server = "apismart.weble.kz/api";
int port = 443;

void setup() {
  Serial.begin(9600);

  while(WiFi.begin(ssid, pass) != WL_CONNECTED) {
    Serial.println("Connectng to Wifi");
    delay(1000);
  }

  Serial.println("Connected to Wifi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;

    if (!client.connect(server, port)) {
      Serial.println("Connection failed");
      return;
    }

    client.print(String("GET / HTTP/1.1\r\n") +
                 "Host: " + server + "\r\n" +
                 "Connection: close\r\n\r\n");
    delay(1000);

    while (client.available()) {
      String line = client.readStringUntil('\r');
      Serial.print(line);
    }

    Serial.println();
    Serial.println("Closing connection");
    client.stop();

    delay(5000);
  } 
}

