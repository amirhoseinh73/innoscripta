FROM php:8.1-fpm

WORKDIR /app

RUN apt-get update && \
    apt-get install -y
RUN apt-get install -y curl
RUN apt-get install -y build-essential libssl-dev zlib1g-dev libpng-dev libjpeg-dev libfreetype6-dev
RUN apt-get install -y libicu-dev
RUN apt-get install -y libzip-dev
RUN apt-get install -y libonig-dev
RUN docker-php-ext-install intl 
RUN docker-php-ext-configure intl

RUN docker-php-ext-install mysqli pdo pdo_mysql zip mbstring

RUN docker-php-ext-configure gd \
    && docker-php-ext-install gd

RUN apt-get update; \
    apt-get install -y libpq5 libpq-dev; \
    docker-php-ext-install pdo pdo_pgsql; \
    apt-get autoremove --purge -y libpq-dev; \
    apt-get clean ;

RUN curl -sS https://getcomposer.org/installer |php -- \
     --install-dir=/usr/local/bin --filename=composer

RUN echo "max_file_uploads=100" >> /usr/local/etc/php/conf.d/docker-php-ext-max_file_uploads.ini
RUN echo "post_max_size=120M" >> /usr/local/etc/php/conf.d/docker-php-ext-post_max_size.ini
RUN echo "upload_max_filesize=120M" >> /usr/local/etc/php/conf.d/docker-php-ext-upload_max_filesize.ini

RUN chmod +x /usr/local/bin/composer

ARG COMPOSER_ALLOW_SUPERUSER=1

COPY ./Laravel/ .

RUN composer install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then rm /app/.env && mv /app/.env.prod /app/.env; \
    fi

RUN composer dump-autoload

EXPOSE 8000

CMD [ "composer", "start" ]
