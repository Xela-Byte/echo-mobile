/**
 * Settings Screen
 */

import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  return (
    <LinearGradient
      colors={['#0a0015', '#1a0030', '#0a0015']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Echo - Seeker Signal</Text>
            <Text style={styles.infoText}>Version 1.0.0 (Demo)</Text>
            <Text style={styles.infoText}>
              Proof of Physical Status Protocol
            </Text>
            <Text style={styles.infoText}>
              Powered by Solana Mobile Stack
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Development Mode</Text>
          
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              ⚠️ Running in Expo Go with limited features.
              {'\n\n'}
              For full functionality:
              {'\n'}• Build custom dev client: npx expo run:android
              {'\n'}• Or create standalone build
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>✓ Wallet Connection (Demo)</Text>
            <Text style={styles.featureItem}>✓ SGT Verification (Demo)</Text>
            <Text style={styles.featureItem}>✓ SKR Tracking (Demo)</Text>
            <Text style={styles.featureDisabled}>⊗ NFC Handshakes (Requires build)</Text>
            <Text style={styles.featureDisabled}>⊗ Twitter Integration (Requires build)</Text>
            <Text style={styles.featureDisabled}>⊗ Geo-fencing (Requires build)</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    fontSize: 16,
    color: '#14F195',
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#14F195',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
    marginBottom: 4,
  },
  warningBox: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.3)',
  },
  warningText: {
    fontSize: 14,
    color: '#FFC107',
    lineHeight: 22,
  },
  featureList: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  featureItem: {
    fontSize: 14,
    color: '#14F195',
    marginBottom: 12,
    lineHeight: 20,
  },
  featureDisabled: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.4,
    marginBottom: 12,
    lineHeight: 20,
  },
});
