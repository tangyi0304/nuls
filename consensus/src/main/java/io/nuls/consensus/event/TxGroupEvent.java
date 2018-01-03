package io.nuls.consensus.event;

import io.nuls.consensus.constant.ConsensusEventType;
import io.nuls.consensus.entity.TxGroup;
import io.nuls.core.exception.NulsException;
import io.nuls.core.utils.io.NulsByteBuffer;

/**
 * @author Niels
 * @date 2017/11/13
 */
public class TxGroupEvent extends BaseConsensusEvent<TxGroup> {

    public TxGroupEvent() {
        super(ConsensusEventType.SMALL_BLOCK);
    }

    @Override
    protected TxGroup parseEventBody(NulsByteBuffer byteBuffer) throws NulsException {
        return byteBuffer.readNulsData(new TxGroup());
    }


}
