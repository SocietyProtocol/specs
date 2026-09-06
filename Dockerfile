FROM nginx:1.27-alpine
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY public /usr/share/nginx/html
ENV PORT=80
EXPOSE 80
CMD ["/bin/sh", "-c", "sed \"s/LISTEN_PORT/${PORT}/\" /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
