int yellow = 13;
int red = 7;

int milliseconds = 500;

void setup() {
  // put your setup code here, to run once:
  pinMode(yellow, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(yellow, HIGH);
  digitalWrite(red, LOW);
  delay(milliseconds);
  digitalWrite(red, LOW);
  digitalWrite(yellow, HIGH);
  delay(milliseconds * 2);
}
