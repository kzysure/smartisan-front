FROM nginx
COPY ./dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d
