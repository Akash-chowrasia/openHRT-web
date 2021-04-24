FROM nginx
RUN rm -rf /usr/share/nginx/html
COPY ./public /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
