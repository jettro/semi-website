FROM ruby:2.6.3-stretch
WORKDIR /website
RUN gem install bundler:2.0.2
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  apt-get install -y nodejs

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json package-lock.json ./
RUN npm install
COPY . . 

RUN npm run build

CMD ["npm", "run", "docker"]

