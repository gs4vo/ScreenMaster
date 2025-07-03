import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import styles from '../styles/ConfirmationModalStyles';

const ConfirmationModal = ({
  visible,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = 'Deletar',
  cancelText = 'Cancelar',
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.textStyle}>{cancelText}</Text>
            </Pressable>
            
            <Pressable
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={styles.textStyle}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;