import  Player from './Player';
import SoundAudioPlayer from 'soundcloud-audio';

export default class CorgialPlayer extends SoundAudioPlayer {
  constructor(clientId: string, apiUrl: string) {
    clientId = clientId ? clientId : 'client';
    apiUrl = apiUrl ? apiUrl : 'api';
    super(clientId, apiUrl);
  }
};

export {
  Player
}
