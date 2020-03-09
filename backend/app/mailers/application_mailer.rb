# class ApplicationMailer < ActionMailer::Base
#   default from: 'from@example.com'
#   layout 'mailer'
# end

require 'sendgrid-ruby'
include SendGrid

from = Email.new(email: 'test@example.com')
to = Email.new(email: 'test@example.com')
subject = 'Evernote note'
content = Content.new(type: 'text/plain', value: 'The note goes here')
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
