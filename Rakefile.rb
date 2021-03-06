
require 'html-proofer'

task :test do
    options = {
        :allow_hash_href => true,
        :assume_extension => true,
        :empty_alt_ignore => ['/.*/'],
        :internal_domains => ['www.semi.technology'],
        # codepen is behind a browser detection screen so cURL will not work
        :url_ignore => [/codepen.io/, /linkedin.com/, /twitter.com/],
        :typhoeus => {
          :connecttimeout => 20,
          :timeout => 60,
          # avoid strange SSL errors: https://github.com/gjtorikian/html-proofer/issues/376
          :ssl_verifypeer => false,
          :ssl_verifyhost => 0
        }
    }
    HTMLProofer.check_directory("./_site", options).run
end
