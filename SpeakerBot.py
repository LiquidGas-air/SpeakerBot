import speech_recognition as sr
import pyttsx3
from pyttsx3.drivers import sapi5
import eel
import cleverbotfreeapi
eel.init('GUI')
query=0
engine = pyttsx3.init()
voices = engine.getProperty('voices')  
for voice in voices:
    print('here')
    if 'David' in voice.name:
        print(voice.name)
        engine.setProperty('voice', voice.id)
print('maybe working')
@eel.expose
def buttono():
    try:
        print('Cлушаем...')
        with sr.Microphone(device_index=1) as source:
            audio= sr.Recognizer().listen(source)
        voice = sr.Recognizer().recognize_google(audio, language = "en-EN").lower()
        print("[log]: " + voice)
    except sr.UnknownValueError:
        print("!!!Couldn't recognize voice")
    except sr.RequestError as e:
        print("!!!Check internet connection")
    except UnboundLocalError:
        print('!!!Say something')
    print('Закончили')
    return voice
 

@eel.expose
def conversation(text):
    print(text)
    var=cleverbotfreeapi.cleverbot(text, session="How are you?")
    print(var)
    return var
@eel.expose
def saying(text):
    print(text)
    engine.say(text)
    engine.runAndWait()
    
print('Stop here')
eel.start('main.html', size=(1000,800), mode='chrome')