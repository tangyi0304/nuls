package io.nuls.core.chain.entity;

import io.nuls.core.chain.manager.BlockHeaderValidatorManager;
import io.nuls.core.crypto.VarInt;
import io.nuls.core.exception.NulsException;
import io.nuls.core.utils.crypto.Utils;
import io.nuls.core.utils.io.NulsByteBuffer;
import io.nuls.core.utils.io.NulsOutputStreamBuffer;
import io.nuls.core.validate.NulsDataValidator;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author vivi
 * @date 2017/10/30
 */
public class BlockHeader extends BaseNulsData {

    private NulsDigestData hash;
    private NulsDigestData preHash;
    private NulsDigestData merkleHash;

    private long time;

    private long height;

    private long txCount;

    private String packingAddress;

    private NulsSignData sign;

    private byte[] extend;

    public BlockHeader() {
        initValidators();
    }

    private void initValidators() {
        List<NulsDataValidator> list = BlockHeaderValidatorManager.getValidators();
        for (NulsDataValidator validator : list) {
            this.registerValidator(validator);
        }
    }

    @Override
    public int size() {
        int size = 0;
        size += this.getVersion().size();
        if (null != hash) {
            size += hash.size();
        }
        size += preHash.size();
        size += merkleHash.size();
        size += Utils.sizeOfSerialize(time);
        size += Utils.sizeOfSerialize(height);
        size += Utils.sizeOfSerialize(txCount);
        size += Utils.sizeOfSerialize(packingAddress);
        if (null != sign) {
            size += sign.size();
        }
        size += Utils.sizeOfSerialize(extend);
        return size;
    }

    @Override
    protected void serializeToStream(NulsOutputStreamBuffer stream) throws IOException {
        stream.writeShort(this.getVersion().getVersion());
        stream.writeNulsData(this.hash);
        this.preHash.serializeToStream(stream);
        this.merkleHash.serializeToStream(stream);
        stream.writeVarInt(time);
        stream.writeVarInt(height);
        stream.writeVarInt(txCount);
        stream.writeString(packingAddress);
        stream.writeNulsData(this.sign);
        stream.writeBytesWithLength(extend);
    }

    @Override
    protected void parse(NulsByteBuffer byteBuffer) throws NulsException {
        this.version = new NulsVersion(byteBuffer.readShort());
        this.hash = new NulsDigestData();
        this.hash.parse(byteBuffer);
        this.preHash = new NulsDigestData();
        this.preHash.parse(byteBuffer);
        this.merkleHash = new NulsDigestData();
        this.merkleHash.parse(byteBuffer);
        this.time = byteBuffer.readVarInt();
        this.height = byteBuffer.readVarInt();
        this.txCount = byteBuffer.readVarInt();
        this.packingAddress = byteBuffer.readString();

        this.sign = new NulsSignData();
        this.sign.parse(byteBuffer);

        this.extend = byteBuffer.readByLengthByte();
    }

    public NulsDigestData getHash() {
        return hash;
    }

    public void setHash(NulsDigestData hash) {
        this.hash = hash;
    }

    public NulsDigestData getPreHash() {
        return preHash;
    }

    public void setPreHash(NulsDigestData preHash) {
        this.preHash = preHash;
    }

    public NulsDigestData getMerkleHash() {
        return merkleHash;
    }

    public void setMerkleHash(NulsDigestData merkleHash) {
        this.merkleHash = merkleHash;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public long getHeight() {
        return height;
    }

    public void setHeight(long height) {
        this.height = height;
    }

    public long getTxCount() {
        return txCount;
    }

    public void setTxCount(long txCount) {
        this.txCount = txCount;
    }

    public NulsSignData getSign() {
        return sign;
    }

    public void setSign(NulsSignData sign) {
        this.sign = sign;
    }

    public void setPackingAddress(String packingAddress) {
        this.packingAddress = packingAddress;
    }

    public String getPackingAddress() {
        return packingAddress;
    }
    public byte[] getExtend() {
        return extend;
    }

    public void setExtend(byte[] extend) {
        this.extend = extend;
    }
}
