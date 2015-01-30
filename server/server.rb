require 'sinatra'

get '/' do
	File.read(File.join('public', 'homepage.html'))
end

