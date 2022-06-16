import { Collection } from '@discordoo/collection';
import BaseGuildChannel from '../BaseGuildChannel';

import type { APIVoiceChannel } from 'discord-api-types/v10';

class VoiceChannel extends BaseGuildChannel<APIVoiceChannel> {
  voiceStates = new Collection<string, unknown>();

  get bitrate() {
    return this.data.bitrate;
  }

  get userLimit() {
    return this.data.user_limit;
  }

  get parentID() {
    return this.data.parent_id;
  }

  get permissionOverwrites() {
    return this.data.permission_overwrites;
  }

  get rtcRegion() {
    return this.data.rtc_region;
  }

  get nsfw() {
    return !!this.data.nsfw;
  }

  get videoQualityMode() {
    return this.data.video_quality_mode;
  }

}

export default VoiceChannel;