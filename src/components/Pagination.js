import React from 'react';
import { View, Button, Text } from 'react-native';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Button
        title="Previous"
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
      <Button
        title="Next"
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </View>
  );
};

export default Pagination;
