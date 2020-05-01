import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ item, handleCancel }) {
  console.tron.log(item);

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(item.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [item.date]);

  console.tron.log(item);
  console.tron.log(dateParsed);

  return (
    <Container past={item.past}>
      <Left>
        <Avatar
          source={{
            uri: item.provider.avatar
              ? item.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${item.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{item.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {item.cancelable && !item.canceled_at && (
        <TouchableOpacity onPress={handleCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
