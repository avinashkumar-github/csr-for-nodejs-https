# csr-for-nodejs-https
Creating and implementing CSR keys for allowing NodeJS app to run on secure socket https in localhost


## Run the following command to generate the .pem files. Should have access to openssl refer https://code.google.com/archive/p/openssl-for-windows/downloads
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```
