import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const fortunes = [
  'A sorte está ao seu lado hoje!',
  'Você está prestes a fazer uma descoberta incrível.',
  'Grandes oportunidades estão a caminho!',
  'A felicidade bate à sua porta.',
  'O sucesso é o destino de quem acredita.',
  'Uma surpresa agradável te aguarda em breve.',
  'Boas notícias chegarão até você hoje!',
  'Você tem o poder de mudar seu futuro.',
  'O universo está conspirando a seu favor.',
  'Você encontrará o que procura em breve.'
];

export default function App() {
  const [fortune, setFortune] = useState('');
  const [cookieBroken, setCookieBroken] = useState(false);

  const brkCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setCookieBroken(true);
  };

  const resetCookie = () => {
    setFortune('');
    setCookieBroken(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={brkCookie} disabled={cookieBroken}>
        <Image
          source={
            cookieBroken
              ? require('./assets/cookie_open.png')
              : require('./assets/cookie_closed.png') 
          }
          style={styles.cookieImage}
        />
      </TouchableOpacity>

      {cookieBroken && <Text style={styles.fortuneText}>{fortune}</Text>}

      {cookieBroken && (
        <TouchableOpacity onPress={resetCookie} style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cookieImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#0e2b40',  
    padding: 10,                 
    borderRadius: 15,             
    marginTop: 50,               
    width: 150,                  
    justifyContent: 'center',    
    alignItems: 'center',
    elevation: 10,
  },
  buttonText: {
    color: 'white',           
    fontSize: 16,                
    fontWeight: 'bold',          
  },
});
