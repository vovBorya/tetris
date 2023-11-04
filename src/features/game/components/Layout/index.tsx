import React, {FC} from 'react';
import { Flex } from 'antd'

import Field from '../Field'
import {DEFAULT_GAME_CONTEXT_VALUES, GameContextProvider} from '../../context'

import styles from './GameLayout.module.scss'

const GameLayout: FC = () => {
  return (
    <GameContextProvider value={DEFAULT_GAME_CONTEXT_VALUES}>
      <Flex
        flex={1}
        justify='center'
        align='center'
        className={styles.gameLayout}>
        <Field />
      </Flex>
    </GameContextProvider>
  );
};

export default GameLayout;
